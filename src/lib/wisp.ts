import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "cluqyx1rl0000l5ds3f0vkfer",
});

export type { GetPostsResult, GetPostResult };
