import InputBox from "./components/InputBox";
import "./App.css";
import ButtonComp from "./components/Button";
function UserRegister() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/users")
  //     .then((res) => {
  //       setUsers(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <div className="container">
        <div className="flexcenter">
          <div className="box">
            <InputBox inputname="Firstname" inputtype="text" />
            <br />
            <InputBox inputname="Lastname" inputtype="text" />
            <br />
            <InputBox inputname="Email" inputtype="text" />
            <br />
            <InputBox inputname="Password" inputtype="password" />
            <br />
            <ButtonComp buttonname="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister;
