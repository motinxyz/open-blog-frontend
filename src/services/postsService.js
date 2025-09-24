import apiRequest from "./api";

export async function createPost({ title, content }) {
  try {
    const data = await apiRequest("/posts/new", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    return { success: true, post: data };
  } catch (error) {
    return error;
  }
}

export async function getPosts({ limit = 20, cursor = null }) {
  try {
    const params = new URLSearchParams({ limit });
    if (cursor) {
      params.append("cursor", cursor);
    }
    return await apiRequest(`/posts?${params.toString()}`);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
}
