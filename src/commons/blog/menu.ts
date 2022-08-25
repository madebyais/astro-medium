export interface IBlogMenu {
  label: string;
  path: string;
}

export const BlogPrimaryMenu: Array<IBlogMenu> = [
  { label: "About", path: "/about" },
  { label: "Story", path: "/blog/story" },
  { label: "Tutorial", path: "/blog/tutorial" }
]