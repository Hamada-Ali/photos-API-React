import ImageShow from "./ImageShow"
import './ImageList.css'

const ImageList = ({images}) => {

    const renderedImages = images.map(image => { // we used map because map returns a new array unlike forEach does not
            return <ImageShow image={image} key={image.id}/>
        })

    return <div className="image-list">{renderedImages}</div>
}
export default ImageList