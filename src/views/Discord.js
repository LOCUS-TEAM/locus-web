import React from 'react';
//import swal from 'sweetalert';
import MetaTags from 'react-meta-tags';

const Discord = ({ match }) => {

  /*return swal("보안을 위해 서버에 가입할 수 없습니다.", "나중에 다시 시도해 주세요.", "error")
  .then(() => {
    window.location.replace('/');
  });*/

  return (
    <>
    
      <MetaTags>
          <meta property="og:title" content="Discord : Team Locus" />
          <title>Discord : Team Locus</title>
      </MetaTags>

      {window.location.replace("https://tinyurl.com/discordlocus")}

    </>
  )

}

export default Discord;