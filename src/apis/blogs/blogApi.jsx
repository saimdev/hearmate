import api from "../axios-instance";

export const getBlogs = async () => {
    const response = await api.get("/blogs", {
        params: {
            type: "hearmate"
        }
    })

    return response.data
}

export const getBlog = async (id) => {
    const response = await api.get(`/blogs/${id}`, {
        params: {
            type: "hearmate",
        }
    })

    return response.data
}