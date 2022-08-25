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
    picUrl: "https://media-exp1.licdn.com/dms/image/C5103AQHTk0qh6nrt2Q/profile-displayphoto-shrink_200_200/0/1554980011583?e=1666828800&v=beta&t=B70rZfvBabqnlyRlufw6ECA0B5k9ML1DOX3If6g-BfY",
    email: "faris@monolog.id"
  }
}
