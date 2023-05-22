import {AnimeCardGrid} from '../components/anime/anime-card-grid';
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "../components/auth/buttons.component";
import { User } from "../components/auth/user.component";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

async function getRecentAnime() {
  const res = await fetch("https://consumet-api-production-b530.up.railway.app/anime/gogoanime/top-airing");
  return res.json();
}
 
export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/anime");
  }else{
    return (
      redirect("/api/auth/signin")
    );
  }
}