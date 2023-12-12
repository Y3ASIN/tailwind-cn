import { useState } from "react";
import cn from "./lib/cn";

function Button({className, ...restProps}) {
    const [loading, setLoading] = useState(false)
  return (
    <button className={cn(
        "bg-blue-500 py-4 px-6 rounded text-white",
        className,
        {
            "bg-gray-500":loading
        }
        )
    }
    onClick={()=>setLoading((l)=>!l)}
    {...restProps}
    >Try tailwind cn</button>
  );
}
export default Button;
