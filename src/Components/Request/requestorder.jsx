import React from 'react'
import {RequestContainer,RequestWrapper,RequestRow,RequestColumnWrapper,RequestColumn1,RequestColumn2,RequestTextWrapper,RequestTop} from './RequestElements'
const RequestOrder = () => {
    return (
        <RequestContainer>
        <RequestWrapper>
            <RequestRow>
                <RequestColumn1>
                    <RequestTextWrapper>
                        <RequestTop>Raise Request</RequestTop>
                        <ul>
                            <li>Contact Details</li>
                            <li>Category</li>
                            <l1>Date</l1>
                        </ul>
                    </RequestTextWrapper>
                </RequestColumn1>
                <RequestColumn2>
                    <RequestColumnWrapper>
                        {/* <RequestForm>

                        </RequestForm> */}
                        Hey!
                    </RequestColumnWrapper>
                </RequestColumn2>
            </RequestRow>
        </RequestWrapper>
            
        </RequestContainer>
    )
}

export default RequestOrder;
