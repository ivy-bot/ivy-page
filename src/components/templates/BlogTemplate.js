import React from "react";
import ArticlePreview from "../templates/ArticlePreview";

require('./BlogTemplate.css')

export default class BlogTemplate extends React.Component {


    colorToRGB = (color) => {
        if (color == null || color == "") {
            return "#E0E0E0"

        }
        else if (color.includes("red")) {
            return "#E57373"
        } else if (color.includes("green")) {
            return "#C8E6C9"
        } else if (color.includes("yellow")) {
            return "#FFF59D"
        } else if (color.includes("pink")) {
            return "#F8BBD0"
        } else if (color.includes("blue")) {
            return "#90CAF9"
        } else if (color.includes("purple")) {
            return "#CE93D8"
        } else if (color.includes("orange")) {
            return "#FFCC80"
        } else if (color.includes("brown")) {
            return "#A1887F"
        } else if (color.includes("black")) {
            return "#616161"
        } else {
            return "#E0E0E0"
        }
    }

    adjustTitle = (str) => {
        if (str == null || str == "") {
            return ""
        } else {

            return str.charAt(0).toUpperCase() + str.slice(1, str.length - 1)

        }
    }

    render() {


        return (
            <div style={{background: this.colorToRGB(this.props.color)}}>
                <div className="w-100 cf helvetica dark-gray pa3 pa4-m pa5-l mw9 center">
                    <div className="fl w-50 pr2 pr3-l mb3 mb4-l">
                        <div className="cover pv5 pv6-m pv6-l"
                             style={{background: `black url(${this.props.images[0]}) center`}}></div>
                    </div>
                    <div className="fl w-50 w-25-l pl2 pr2-m ph2-l mb3 mb4-l">
                        <div className="cover pv5 pv6-m pv6-l"
                             style={{background: 'black url(' + this.props.images[1] + ') center'}}></div>
                    </div>
                    <div className="fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l">
                        <div className="cover pv5 pv6-m pv6-l"
                             style={{background: 'black url(' + this.props.images[2] + ') left'}}></div>
                    </div>
                    <div className="fl w-50 w-50 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l">
                        <div className="cover pv5 pv6-m pv6-l"
                             style={{background: 'black url(' + this.props.images[3] + ') center'}}></div>
                    </div>
                    <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4">
                        <div className="pa4 pa0-l bn tc">
                            <p className="lh-copy mt2 mt3-m mt5-l f6">
                            <span className="fw9 f6 f-5-l db lh-title mb3 mb4-l measure-narrow"> 
                                {this.adjustTitle(this.props.title)}
                            </span> {!this.props.title &&
                            <div className="f2 bg-black-10 ma3 br2">
                                    <span className="o-0"> 
                                    . 
                                    </span>
                            </div>}
                                <span className="db-l f2-l"> 
                                    <div
                                        className="i">
                                        {this.props.description}
                                    </div>
                                    {!this.props.description &&
                                    <div className="f3 bg-black-10 ma3 br2">
                                            <span className="o-0 w5-ns"> 
                                            . 
                                            </span>
                                    </div>} 
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="cf">
                        <div className="fl w-100 w-25-l pl3-l mb3 mb4-l">
                            <div className="cover pv5 pv6-m pv6-l"
                                 style={{background: 'black url(' + this.props.images[4] + ') center'}}></div>
                        </div>
                    </div>
                </div>

                {this.props.articleAvailable &&
                [<ArticlePreview title="Sample Article"
                                 image="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"
                                 content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lorem odio. Donec pretium dolor vel ante molestie, a cursus magna ornare. Sed tellus nisl, efficitur vel elementum at, feugiat id ex. Maecenas tempus, ligula aliquam vehicula tristique, orci nunc suscipit metus, ac egestas eros tortor et mauris. "
                                 time=""/>,
                    <ArticlePreview title="Sample Article"
                                    image="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lorem odio. Donec pretium dolor vel ante molestie, a cursus magna ornare. Sed tellus nisl, efficitur vel elementum at, feugiat id ex. Maecenas tempus, ligula aliquam vehicula tristique, orci nunc suscipit metus, ac egestas eros tortor et mauris. "
                                    time=""/>, <ArticlePreview title="Sample Article"
                                                               image="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"
                                                               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lorem odio. Donec pretium dolor vel ante molestie, a cursus magna ornare. Sed tellus nisl, efficitur vel elementum at, feugiat id ex. Maecenas tempus, ligula aliquam vehicula tristique, orci nunc suscipit metus, ac egestas eros tortor et mauris. "
                                                               time=""/>]
                }


            </div>
        )
    }
}
