const request = require("supertest");
const app = require("./index");
let createdProductId;

// Start the server before running the tests
beforeAll(async () => {
    await new Promise((resolve) => {
        const server = app.listen(5001, () => {
            console.log("Server started");
            resolve(server);
        });
    });
});

describe("Sending a request to server", () => {
    it("should sending a request to server", async () => {
        await request(app)
            .get("/products")
            .expect(200);
    });
});

describe("CRUD Operations", () => {
    it("should create a new product", async () => {
        const newProduct = { name: "Test New Product", price: 20 };
        const response = await request(app)
            .post("/products")
            .send(newProduct)
            .expect(201);

        expect(response.body).toHaveProperty("message", "Product added successfully.");
        expect(response.body).toHaveProperty("productId");
        createdProductId = response.body.productId;
    });

    it("should read all products", async () => {
        const response = await request(app)
            .get("/products")
            .expect(200);

        expect(response.body).toHaveLength(6);
    });

    it("should update an existing product", async () => {
        const productId = 1;
        const updatedProduct = { name: "Updated Product", price: 30 };

        const response = await request(app)
            .patch(`/products/${productId}`)
            .send(updatedProduct)
            .expect(200);

        expect(response.body).toHaveProperty("message", "Product updated successfully.");
    });

    it("should delete the previously created product", async () => {
        if (createdProductId) {
            const response = await request(app)
                .delete(`/products/${createdProductId}`)
                .expect(200);

            expect(response.body).toHaveProperty("message", "Product deleted successfully.");
        } else {
            throw new Error("No product ID found to perform deletion");
        }
    });
});