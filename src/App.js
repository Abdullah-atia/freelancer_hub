import React, { useEffect, Suspense, lazy } from "react";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import TestSignin from "./pages/Signin/TestSignin";
import FreelancerSignup from "./pages/Signup/freelancerSignup";
import { Toaster } from "react-hot-toast";
import Task from "./pages/Task/Task";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { AdminProvider } from "./Context/AdminContext";
import AdminDashBoard from "./pages/AdminDashBoard/AdminDashBoard";
import AdminProdected from "./components/AdminProdected/AdminProdected";
import PostProject from "./pages/PostProject/PostProject";
import ClientSignup from "./pages/Signup/clientSignup";
import PostCategory from "./pages/PostCategory/PostCategory";
import PostSkill from "./pages/PostCategory/PostSkill";
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from "./components/Loading/Loader";
import Category from "./pages/Category/Category";
import UpdateCategory from "./pages/Category/UpdateCategory";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Projects from "./pages/Projects/Projects";
import ClientProject from "./pages/Projects/clientProject";
import ProjectProposal from "./pages/Projects/projectProposal";
import PropasalForm from "./pages/ProjectProposal/PropasalForm";
import ReplayProposal from "./pages/ProjectProposal/ReplayProposal";
import AuthProvider from "./Context/Auth";
import MyProject from "./pages/FreelancerDashBoard/MyProject";
import JobForm from "./pages/FreelancerDashBoard/JobForm";
import MyJobs from "./pages/FreelancerDashBoard/MyJobs";
import JobProposalForm from "./pages/FreelancerDashBoard/JobProposalForm";
import Client from "./pages/Profile/Client";
import Freelancer from "./pages/Profile/Freelancer";
import ReplayJob from "./pages/FreelancerDashBoard/ReplayJob";
import CommingProposal from "./pages/FreelancerDashBoard/CommingProposal";
import DeliveredProject from "./pages/FreelancerDashBoard/DeliveredProject";
import DeliveredJob from "./pages/FreelancerDashBoard/DeliveredJob";
import Users from "./pages/Users/users";
import UploadCv from "./pages/FreelancerDashBoard/UploadCv";
import CreatdJobByProject from "./pages/FreelancerDashBoard/CreatdJobByProject";
import Skills from "./pages/Skills/Skills";
import UpdateSkill from "./pages/Skills/UpdateSkill";
import Search from "./pages/Search/Search";
const Profile = lazy(() => import("./pages/Profile/Profile"));
const EditProfile = lazy(() => import("./pages/Profile/EditProfile"));

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      offset: 200,
      duration: 600,
      easing: "ease",
      delay: 800,
    });
    // AOS.refresh();
  }, []);

  const queryClient = new QueryClient();

  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <AdminProvider>
            <BrowserRouter>
              <Nav />
              <Toaster position="bottom-right" reverseOrder={false} />
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/job" element={<Home />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route
                    path="/myProjects/:userId"
                    element={<ClientProject />}
                  />
                  <Route path="/clientdetails/:userId" element={<Client />} />
                  <Route
                    path="/freelancerdetails/:userId"
                    element={<Freelancer />}
                  />

                  <Route path="/myJobs" element={<MyJobs />} />
                  <Route path="/uploadcv" element={<UploadCv />} />
                  <Route
                    path="/ProjectProposal/:projectId"
                    element={<ProjectProposal />}
                  />
                  <Route
                    path="/projectDetails/:projectId"
                    element={<ProjectDetails />}
                  />
                  <Route
                    path="/PropasalForm/:projectId"
                    element={<PropasalForm />}
                  />
                  <Route
                    path="/ReplayProposal/:proposalId"
                    element={<ReplayProposal />}
                  />
                  <Route path="/myprojects" element={<MyProject />} />
                  <Route path="/job/:projectId" element={<JobForm />} />
                  <Route
                    path="/jobProposal/:jobId"
                    element={<JobProposalForm />}
                  />
                  <Route
                    path="/DeliveredProject/:projectId"
                    element={<DeliveredProject />}
                  />
                  <Route
                    path="/DeliveredJob/:jobId"
                    element={<DeliveredJob />}
                  />

                  <Route path="ComingProposal" element={<CommingProposal />} />
                  <Route
                    path="/ReplayProposalJob/:proposalId"
                    width={100}
                    element={<ReplayJob />}
                  />
                  <Route
                    path="/CreatdJobByProject/:projectId"
                    element={<CreatdJobByProject />}
                  />
                  {/* <Route path="job/:id" element={<Task />} /> */}
                  <Route path="/profile/:userId" element={<Profile />} />
                  <Route path="/freelancer/:userId" element={<Freelancer />} />

                  <Route path="/client/:userId" element={<Client />} />
                  <Route path="/search/" element={<Search />} />
                  <Route
                    path="/EditProfile/:userId"
                    element={<EditProfile />}
                  />
                  <Route path="/allCategory" element={<Category />} />
                  <Route
                    path="/updateCategory/:id"
                    element={<UpdateCategory />}
                  />
                  <Route path="/viewallusers" element={<Users />} />
                  <Route path="/allSkills" element={<Skills />} />
                  <Route
                    path="/updateSkill/:skillId"
                    element={<UpdateSkill />}
                  />

                  <Route path="/signin" element={<TestSignin />} />
                  <Route path="/clientsignup" element={<ClientSignup />} />
                  <Route path="/freesignup" element={<FreelancerSignup />} />
                  <Route path="/postProject" element={<PostProject />} />
                  <Route path="/postCategory" element={<PostCategory />} />
                  <Route path="/postSkill" element={<PostSkill />} />
                  <Route path="/admin" element={<AdminDashBoard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              {/* <Footer /> */}
            </BrowserRouter>
          </AdminProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
