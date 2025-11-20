import Approach from "@/components/approach";
import Cards from "@/components/news";
import Characteristics from "@/components/characteristics";
import Express from "@/components/express";
import Help from "@/components/help";
import HomePage from "@/components/home";
import Info from "@/components/info";
import Map from "@/components/map";
import Posts from "@/components/posts";
import Price from "@/components/price";
import Tasks from "@/components/tasks";
import Technical from "@/components/technical";
import Website from "@/components/website";

export default function Home() {
  return (
    <>
      <HomePage />
      <Website/>
      <Express/>
      <Cards/>
      <Tasks/>
      <Help/>
      <Posts/>
      <Map/>
      <Characteristics/>
      <Approach/>
      <Price/>
      <Info/>
      <Technical/>
    </>
  );
}
