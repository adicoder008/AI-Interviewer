import Image from "next/image";
import Navbar from "./(components)/Navbar";
import LandingPage from "./(components)/LandingPage";
import Dashboard from "./(components)/Dashboard";
import DiscussionRoom from "./(components)/DiscussionRoom";

export default function Home() {
  return (
    <>
    <Dashboard/>
    <DiscussionRoom />
    {/* <LandingPage /> */}
    </>
    
  );
}
