import axios from "axios";

const AIRTABLE_API_KEY =
  "patFutVAO26Kn0sU3.d120d8b9567782ecbe81b1b0e98d4d27486a74134201e156cddc579b3933378f";
const BASE_ID = "appJusnA4Zr2V0qWs";
const BLOG_TABLE_NAME = "Blog";

const blog = axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}/${BLOG_TABLE_NAME}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const getBlogs = async (category) => {
  try {
    if (category) {
      const response = await blog.get(
        `/?filterByFormula=({category} = "${category}")`
      );
      return response.data.records;
    } else {
      const response = await blog.get("");
      return response.data.records;
    }
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    return [];
  }
};

export const getBlog = async (blogId) => {
  try {
    const response = await blog.get(`/${blogId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    return null;
  }
};
