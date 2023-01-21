import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import UpdateUser from '../../components/UpdateUser/UpdateUser'

export default function Edit() {
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44">
        <Heading />
        <UpdateUser />
      </div>
    </div>
  )
}
