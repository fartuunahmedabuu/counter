import { useState } from "react"

function Image (){

      const [index, setIndex] = useState(0)

      const Images = [
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1709536076~exp=1709539676~hmac=edf1b54638faa3f53b1c0b9004f0c97dd0c60773b6c4e7f40c33d360a66569cc&w=1060",
        "https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg?t=st=1709536911~exp=1709540511~hmac=b5362357268ea29216520f43c48e860103fe42afc531db1a0987efd1c734a234&w=900",
        "https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?t=st=1709536944~exp=1709540544~hmac=c91d8740cc92069cd4dce9ce0193c4967e27a18a0b7ec786b753b78ba61d8f4a&w=900",
        "https://img.freepik.com/free-photo/nice-landscape-with-boat_1048-4711.jpg?t=st=1709536984~exp=1709540584~hmac=9e2c04bcf61fa9217bba3cf04aa86c6462ef1cdea67bddfdc5b23e9d48e6f036&w=1060",
        "https://img.freepik.com/free-photo/natures-beauty-close-up-purple-wildflowers-bloom-generative-ai_188544-8591.jpg?t=st=1709537695~exp=1709541295~hmac=228a6fa815ada7509b8eec1bd0a7ac73a859e0872a4bb6ad0b9b000ea1370fb6&w=1060",
        "https://img.freepik.com/free-photo/butterfly-wild_53876-90200.jpg?t=st=1709537765~exp=1709541365~hmac=389614fad285480ec09f22c5239eea1ab1d2ba048538be5438aaf171c7ea1b82&w=900"
      ]

      const HandleNext = () => {
        if (index < Images.length -1){
            setIndex (index +1)
        }
      }

      const HandlePrev = () => {
        if(index > 0){
            setIndex (index -1)
        }
      }



    return <div className=" text-center">
        <div className="px-20 py-8">
        <img className="w-full h-[480px]" src={Images[index]} alt="" />
        </div>
        <button onClick={HandlePrev} className="bg-purple-600 px-6 py-5 rounded m-3 text-white text-3xl">Prev</button>
        <button onClick={HandleNext} className="bg-purple-600 px-6 py-5 rounded text-white text-3xl">Next</button>
    </div>
}

export default Image