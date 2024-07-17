import React from 'react'

const textBox = () => {
    return (
        <div className='text-box'>
            <h3>JavaScript News and Updates of June 2022 </h3>
            <h4> Vue Team Resorts to Backportingc</h4>
            <p>
                Evan You together with his team gives the finishing touches to Vue 2.7 despite the fact that Vue 3 now being the default version of the framework. Why is that? The point is that many developers still cannot migrate to v3.0 because of various bottlenecks such as dependency compatibility, browser support requirements, etc. Therefore, it was decided to help those who still have to use Vue 2.x by backporting some of the key features from Vue 3. As a result, some features from Vue 3 will be available in v2.7 that is currently in beta.

                At the same time, it should be noted that v2.7 will be the last release of Vue 2.x. It will be supported for 18 months (by the end of 2023) to give developers enough time for migration to Vue 3. Learn more details about the upcoming release in this post.
            </p>
        </div>
    )
}

export default textBox