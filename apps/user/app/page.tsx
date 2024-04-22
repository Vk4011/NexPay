import {PrismaClient} from "@repo/database/client";


const client = new PrismaClient();


export default function Page(): JSX.Element {
  return (
  <div>
    <center>
      <h1 className="text-3xl bg-blue-300">Hello </h1>
    </center>

  </div>  
  
  );
}
