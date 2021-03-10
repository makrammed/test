


const category =require("../../controlleur/categorycrud");
   const categoryModel =require("../../models/Category");
   const httpMocks = require("node-mocks-http");
   const newcategory = require("../mock-fonction/newcategory.json")
   const  sinon = require("sinon")
   const allcategory = require("../mock-fonction/allcategory.json");




categoryModel.create =jest.fn();

beforeEach(()=>{
           req = httpMocks.createRequest();
           res = httpMocks.createResponse();

           //next=jest.fn();
         });
          afterEach(() => jest.clearAllMocks());
//get allcategory

 describe("category.getAllCategory", () => {
  it("should have a getallcategory function", () => {
     expect(typeof category.getAllCategory).toBe("function");
    });
  it("should call categoryModel.find({})", async () => {

      await categoryModel.find({});
      const any = categoryModel.find=jest.fn()

      expect(any).toEqual({})
     // expect(categoryModel.find(lean({}))).toBeCalledWith( categoryModel()); give result, ==>   Received has value: {"lean": [Function lean]} de type :
   });
  it("should return response with status 200 and all category", async () => {
      categoryModel.find=jest.fn().mockReturnValue(allcategory);
      await category.getAllCategory(req, res);
      //expect(res.statusCode).toBe(200);
      chy={"category":"phone"}
      console.log(chy)
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData(res.body)).toStrictEqual({ data: allcategory });
    });
  it("should handle errors in getallcategory", async () => {
      const errorMessage = { message: "Error finding" };
      const rejectedPromise = Promise.reject(errorMessage);
     categoryModel.find.mockReturnValue(rejectedPromise);
      await category.getAllCategory(req, res);
      expect(res.statusCode).toBe(400);
      //expect(next).toHaveBeenCalledWith(errorMessage);
    });
});
