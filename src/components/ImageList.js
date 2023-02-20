import ImageShow from "./ImageShow"

const ImageList = ({images}) => {

    const renderedImages = images.map(image => { // we used map because map returns a new array unlike forEach does not
            return <ImageShow image={image} key={image.id}/>
        })

    return <div>{renderedImages}</div>
}
export default ImageList