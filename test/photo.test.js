const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");

describe("Protected routes", () => {
  let token;
  let photoId;

  beforeAll(async () => {
    const userResponse = await request(app).post("/users/register").send({
      username: "test",
      email: "test@mail.com",
      password: "test",
    });

    const loginResponse = await request(app)
      .post("/users/login")
      .send({ email: "testemail@mail.com", password: "testpassword" });

    token = loginResponse.body;
  });

  const photoDetails = {
    title: "test title",
    caption: "test caption",
    image_url: "test image url",
  };

  describe("POST /photos", () => {
    it("should return 201 status code if the photo is successfully created", async () => {
      const res = await request(app)
        .post("/photo")
        .set("token", token)
        .send(photoDetails);
      photoId = res.body.id;
      expect(res.statusCode).toEqual(201);
      expect(typeof res.body).toEqual("object");
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("title");
      expect(res.body).toHaveProperty("caption");
      expect(res.body).toHaveProperty("image_url");
    });
  });

  describe("POST /photos", () => {
    it("should return a 401 error if there is no authentication", async () => {
      const res = await request(app).post("/photo").send(photoDetails);
      expect(res.statusCode).toEqual(401);
    });
  });

  afterAll(async () => {
    await sequelize.queryInterface.bulkDelete("Photos", null, {});
    await sequelize.queryInterface.bulkDelete("Users", null, {});
    await sequelize.close();
  });
})
