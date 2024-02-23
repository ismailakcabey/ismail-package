interface IProps{
    images: string[]
}

const ImageCmp = ({images}:IProps) => {
    return(
        <div className="flex justify-around flex-wrap">
            {
                images.map((image:string, index:number)=>{
                    if(index >= 3){
                        return<div key={index}></div>
                    }
                    else{
                    return(
                        <div key={index}>
                            <img className="mr-px" key={index} src={image} alt="" />
                            
                        </div>
                        
                    )
                    }
                })
            }
        </div>
    )
}

export default ImageCmp