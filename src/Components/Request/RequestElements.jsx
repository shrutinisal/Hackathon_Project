import styled from 'styled-components';

export const RequestContainer = styled.div`
  color:#fff;
  background:red;
  max-width:800px;
  margin:auto;
  


  @media screen and (max-width: 768px){
       padding: 100px 0;
   }
`
export const RequestWrapper = styled.div`
  display:grid;
   z-index: 1;
   height: 650px;
   width: 100%;
   max-width: 600px;
   margin-right:auto;
   margin-left: auto;
   padding: 60px 24px;
   justify-content: center;
`

export const RequestRow = styled.div`
   display:grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: 'col1 col1 col2 col2';
   height:250px;
   background-color:blue;
   margin:auto;

   @media screen and (max-width:768px){
    grid-template-areas: 'col2 col2';
   }
 `
 export const RequestColumn1 = styled.div`
   margin-bottom:15px;
   padding: 0 15px;
   grid-area: col1;
 `
 export const RequestColumn2 = styled.div`
   margin-bottom:15px;
   padding: 0 15px;
   grid-area: col2;
 `
 export const RequestTextWrapper = styled.div`
   max-width:540px;
   padding-top:0;
   padding-bottom: 60px;
 `

 export const RequestTop = styled.p`
   max-width:440px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   color: #010606;
`

export const RequestColumnWrapper = styled.div`
  padding:48px;
`