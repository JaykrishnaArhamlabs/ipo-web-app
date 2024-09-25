import { useNavigate } from "react-router-dom";
import JSONData from './IPOdata.json'

function App() {
  const Header = ["Company/Issue date", "Issue size", "Price range", "Min invest/qty"];
  const navigate = useNavigate();

  const NavigateDetails = (id) => {
    navigate({ pathname: `/ipo/${id}` })
  }

  return (
    <div className="py-10 bg-background h-screen flex flex-col justify-center">
      <div className="mx-4 lg:mx-auto max-w-[1080px] lg:w-[60%] m-auto border rounded bg-background shadow-md">
        <div className="grid grid-cols-4 items-center gap-3 px-2 lg:px-5 py-3 text-center border-b">
          {Header.map((item, i) => (
            <a className="text-gray-500 text-xs font-medium cursor-pointer break-words" key={i}>
              <span>{item}</span>
            </a>
          ))}
        </div>

        <div className="bg-white">
          {JSONData.IPOLits.map((el, i) => (
            <a onClick={() => NavigateDetails(el.id)} key={i} className="grid grid-cols-4 items-center justify-center text-center cursor-pointer gap-y-5 px-3 lg:px-5 border-b py-3 last:border-0">
              <div className="flex gap-[6px] font-semibold">
                <img className="w-7 h-7 lg:w-10 lg:h-10 object-contain border rounded-full" src={el.companylogo} />
                <div className="flex flex-col justify-center">
                  <span className="text-dark text-left text-xs lg:text-sm uppercase">{el.companyName}</span>
                  <span className="text-[10px] text-borderColor font-normal">{el.companyIssueDate}</span>
                </div>
              </div>
              <span className="text-dark font-semibold text-xs lg:text-sm">₹{el.issueSize}</span>
              <span className="text-dark font-semibold text-xs lg:text-sm">₹{el.priceRange}</span>
              <div className="flex flex-col justify-center">
                <span className="text-dark font-semibold text-xs lg:text-sm">₹{el.minInvest}</span>
                <span className="text-borderColor font-normal text-[10px] lg:text-xs">{el.shares} Shares/{el.lots} Lots</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
