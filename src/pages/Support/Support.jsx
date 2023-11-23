import DashboardLayout from "../../components/DashboardLayout"
import { IoMdMail } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import SupportCard from "./components/SupportCard"
import ContactCard from "./components/ContactCard"

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <SupportCard
        leftComponent={<ContactCard></ContactCard>}
        icon={IoMdMail}
        heading="Contact Us"
        para="Have a question or just want to know more? Feel free to reach out to us."
      ></SupportCard>
      <SupportCard
        // leftComponent={}
        icon={IoChatbubble}
        heading="Live Chat"
        para="Don’t have time to wait for the answer? Chat with us now."
      ></SupportCard>
    </DashboardLayout>
  )
}

export default Support