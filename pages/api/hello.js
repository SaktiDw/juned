// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  return res.status(200).json(
    {
      status: true,
      message: "Bla bla",
      data: [
        {
          name: "jack",
          agama: "islam",
        },
        {
          name: "jojo",
          agama: "islam",
        },
      ]
    }
  )
}
