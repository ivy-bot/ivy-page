import React from "react";
import BlogTemplate from "../templates/BlogTemplate";
import TemplateGenStore from "../../stores/templateGenStore";
import ImageStore from "../../stores/imageStore";
export default class ParentBlogTemplate extends React.Component {

    constructor() {
        super()

        let placeholderImg = "https://s.graphiq.com/sites/default/files/2307/media/images/t2/Light_Gray_429810_i0.png"

        this.state = {
            images: [placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg, placeholderImg],
            article: null,
            articles: []
        }
    }

    componentWillMount() {
        TemplateGenStore.addChangeListener(this.handleTitleChange)
        TemplateGenStore.addChangeListener(this.handleDescriptionChange)
        TemplateGenStore.addChangeListener(this.handleArticleChange)
        TemplateGenStore.addChangeListener(this.handleColorChange)
        ImageStore.addChangeListener(this.handleImageChange)
    }

    componentWillUnmount() {
        TemplateGenStore.removeChangeListener(this.handleTitleChange)
        TemplateGenStore.removeChangeListener(this.handleDescriptionChange)
        TemplateGenStore.removeChangeListener(this.handleArticleChange)
        TemplateGenStore.removeChangeListener(this.handleColorChange)
        ImageStore.removeChangeListener(this.handleImageChange)
    }

    handleTitleChange = () => {
        this.setState({title: TemplateGenStore.getTitle()})
    }

    handleDescriptionChange = () => {
        this.setState({description: TemplateGenStore.getDescription()})
    }

    handleArticleChange = () => {
        console.log(TemplateGenStore.getArticles())
        this.setState({articles: TemplateGenStore.getArticles()})
    }

    handleColorChange = () => {
        this.setState({color: TemplateGenStore.getColor()})
    }

    handleImageChange = () => {
        this.setState({images: ImageStore.getImages()})
    }

    render() {
        return (
            <div className='h-100 overflow-auto bg-white' style={{border: '1px solid black'}}>
                <BlogTemplate articleAvailable={this.state.articles === "article"} color={this.state.color}
                              images={this.state.images} articles={this.state.articles} title={this.state.title}
                              description={this.state.description} showArticle={(article) => this.setState({article})}/>
                {this.state.article &&
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-white-80">
                    <div className="f1 tc">
                        {this.state.article}
                    </div>
                </div>
                }
            </div>

        )
    }
}
