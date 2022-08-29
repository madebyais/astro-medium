export interface IBlogAuthor {
  fullname: string;
  description: string;
  picUrl?: string;
  email?: string;
}

export const BlogAuthors: {[key: string]: IBlogAuthor} = {
  "ais": {
    fullname: "Ais",
    description: "Software engineer with more than 12 years of experience and passionate in solving people problems with technology.",
    picUrl: "/images/profile-pic.jpg",
    email: "faris@monolog.id"
  }
}
