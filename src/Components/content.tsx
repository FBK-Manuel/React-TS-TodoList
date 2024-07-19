import { contentProps } from "./Type";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Select from "./constant/Select";

function Content({
  showItem,
  onDelete,
  iconTextStatus,
  setIconTextStatus,
  bgThemes,
}: contentProps) {
  const handleIconChange = (id: number) => {
    setIconTextStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="mt-5">
      <div>
        <hr className="border border-[#262626] rounded-md bg-[#262626] mb-5" />
        <div className="">
          {showItem.length > 0 ? (
            <div>
              <ul>
                {showItem.map((item) => (
                  <div className="container pb-10">
                    <div
                      className="flex flex-row bg-[#262626] rounded-md p-7 border-[#333333] border"
                      style={{
                        backgroundColor: bgThemes.bgColor,
                      }}>
                      {/* <div className="left-full mr-5">({item.id})</div> */}
                      <div>
                        <button onClick={() => handleIconChange(item.id)}>
                          {iconTextStatus[item.id] ? (
                            <FaRegCheckCircle
                              className="mr-4 left-full"
                              size={25}
                              color="#8284FA"
                            />
                          ) : (
                            <FaRegCircle
                              className="mr-4 left-full"
                              size={25}
                              color="#4EA8DE"
                            />
                          )}
                        </button>
                      </div>
                      <li
                        className="flex flex-col w-full text-[#F2F2F2] "
                        key={item.id}
                        value={item.id}>
                        {iconTextStatus[item.id] ? (
                          <del className="text-md text-[#808080] font-sans font-bold">
                            {item.text}
                          </del>
                        ) : (
                          <p
                            className=" text-[#F2F2F2] font-sans font-bold"
                            style={{ color: bgThemes.textColor }}>
                            {item.text}
                          </p>
                        )}
                      </li>
                      <button onClick={() => onDelete(item.id)}>
                        <RiDeleteBin6Line
                          size={20}
                          className="right-full hover:text-[#333333] text-[#808080]"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <div className="flex justify-center items-center pt-9 flex-col">
                <img
                  src="/Clipboard.png"
                  alt="image"
                  width="50px"
                  height="50px"
                />
                <p className="text-[#414141] font-sans font-medium mt-2">
                  You don't have any tasks registered yet <br /> Create tasks
                  and organize your to-dos
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
