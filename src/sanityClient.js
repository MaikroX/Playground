import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "3hdw2mia",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-10-29",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
