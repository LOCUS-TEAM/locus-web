import React from 'react';
import MetaTags from 'react-meta-tags';
import NotService from './NotService';

// 프로필에서 사용 할 데이터
const serviceData = {
  leaf: {
    "invite": "https://discord.com/oauth2/authorize?client_id=903287362698760263&permissions=0&scope=bot%20applications.commands",
    "title": "Leaf"
  },
  ravi: {
    "invite": "https://discord.com/oauth2/authorize?client_id=902786497785241600&permissions=0&scope=bot%20applications.commands",
    "title": "Ravi"
  }
};

const Invite = ({ match }) => {

  let { service } = match.params;

  if (!serviceData[service]) {

    return (
      <NotService />
    )

  }

  return (
    <>

      <MetaTags>
          <meta property="og:title" content={serviceData[service].title+" Invite : Team Locus"} />
          <title>{serviceData[service].title} Invite : Team Locus</title>
      </MetaTags>

      {/*window.location.replace(serviceData[service].invite)*/}

    </>
  )

}

export default Invite;