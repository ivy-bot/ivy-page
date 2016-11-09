/**
 * Created by ouyue on 17/09/16.
 */
import * as React from "react";
import {PropTypes} from "react";

export default class ArticlePreview extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.string
    }

    render() {
        return (
            <div>

                <div className='dn flex-l pa-16 ma5' style={{background: 'rgba(0,0,0,0.03)'}}>
                    <div
                        style={{
                            minWidth: 200,
                            height: 200,
                            backgroundImage: `url(${this.props.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className='flex flex-column space-between ml-38'>
                        {this.props.title == "" &&
                        <div className="f2 bg-black-20 ma3 br2 w-100">
                                    <span className="o-0"> 
                                    . 
                                    </span>
                        </div>
                        }
                        <div className='mb-25 b-ns dark-gray ma3' style={{fontSize: 28}}>
                            {this.props.title}
                        </div>
                        <div className='fw1 mid-gray ma3' style={{fontSize: 20}}>
                            {this.props.content.split(' ').slice(0, 50).join(' ')}...
                        </div>
                    </div>
                </div>

                <div className='br2 dn-l ba dark-gray b--black-10 center w-100 mb-38'>
                    <div
                        className='db w-100 br2 br--top'
                        style={{
                            height: 180,
                            backgroundImage: `url(${this.props.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className='pa2 ph3-ns pb3-ns'>
                        <div className='dt w-100 mt1'>
                            {this.props.title == "" &&
                            <div className="f2 bg-black-20 ma3 br2">
                                    <span className="o-0"> 
                                    . 
                                    </span>
                            </div>
                            }

                            {this.props.title != "" &&
                            <h1 className='f5 f4-ns mv0'>
                                {this.props.title}
                            </h1>
                            }
                        </div>
                        <div>
                            {this.props.description == "" &&
                            <div className="f2 bg-black-20 ma3 br2">
                                    <span className="o-0"> 
                                    . 
                                    </span>
                            </div>
                            }
                            {this.props.description != "" &&
                            <p className='f6 lh-copy mt2 mid-gray'>
                                {this.props.content.split(' ').slice(0, 50).join(' ')}...
                            </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}