import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {DownloadWrapper} from '../style';
class Download extends PureComponent {
    render() {
        return (
          <DownloadWrapper>
              <img className='pic-qrcode' src='/images/qrcode.png' alt='' />
              <div className='info'>
              <div className='title'>
                  下载简书手机App
                  <span className="iconfont">
                      &#xe735;
                  </span>
              </div>
              <div className='description'>
                  随时随地发现和创作内容
              </div>
              </div>
          </DownloadWrapper>
        )
    }
}



export default connect(null, null)(Download);