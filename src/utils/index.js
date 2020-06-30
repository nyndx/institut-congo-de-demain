import slugify from "slugify"

export const slug = string => slugify(string, { replacement: "-", lower: true })
