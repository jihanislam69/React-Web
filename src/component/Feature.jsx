import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png'
import featureimage2 from '../images/feature_2.png'
import featureimage3 from '../images/feature_3.png'

function Feature() {
  return (
    <div id='features'>
    <div className='a-container'>
        <FeatureBox image={featureimage} title='Development Course'/>
        <FeatureBox image={featureimage2} title='Money Saving service Course'/>
        <FeatureBox image={featureimage3} title='usability interface'/>
    </div>

    </div>
  )
}

export default Feature