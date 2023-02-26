import Head from "next/head";
import { Inter, Open_Sans } from "@next/font/google";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUser, fetchUsers } from "@/helper/api/users";
import {
  Action,
  Form,
  FormUsers,
  Input,
  MainLayout,
  Table,
} from "@/components";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
});

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUsers(),
  });

  const { mutate } = useMutation({
    mutationFn: (id) => data.filter((el) => el !== id),
  });

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-4">
        <Table
          columns={[
            { key: "id", title: "id" },
            { key: "name", title: "name" },
            { key: "email", title: "email" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
          data={data}
        />
        <FormUsers />
      </main>
    </MainLayout>
  );
}
