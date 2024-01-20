import React, { useEffect, useState, useRef } from 'react';

const ContributorSection = () => {
  const [contributors, setContributors] = useState([]);
  const contRef = useRef(null);
  const owner = 'ShwetKhatri2001';
  const repoName = 'AR-Webstore';

  useEffect(() => {
    if (contRef.current) {
      const fetchContributors = async (pageNumber) => {
        const perPage = 100;
        const url = `https://api.github.com/repos/${owner}/${repoName}/contributors?page=${pageNumber}&per_page=${perPage}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch contributors data. Status code: ${response.status}`);
        }

        const contributorsData = await response.json();
        return contributorsData;
      };

      const fetchAllContributors = async () => {
        let allContributors = [];
        let pageNumber = 1;

        try {
          while (true) {
            const contributorsData = await fetchContributors(pageNumber);
            if (contributorsData.length === 0) {
              break;
            }
            allContributors = allContributors.concat(contributorsData);
            pageNumber++;
          }

          allContributors.forEach((contributor) => {
            if (contributor.login === owner) {
              return;
            }

            const contributorCard = document.createElement('div');
            contributorCard.classList.add('contributor-card');

            const avatarImg = document.createElement('img');
            avatarImg.src = contributor.avatar_url;
            avatarImg.alt = `${contributor.login}'s Picture`;
            avatarImg.style.width = '105px';
            avatarImg.style.height = '105px';

            const loginLink = document.createElement('a');
            loginLink.href = contributor.html_url;
            loginLink.target = '_blank';
            loginLink.appendChild(avatarImg);

            contributorCard.appendChild(loginLink);

            contRef.current.appendChild(contributorCard);
          });
        } catch (error) {
          console.error(error);
        }
      };

      fetchAllContributors();
    }
  }, []);

  return <div id="contributor" className='fade-effect' ref={contRef} />;
};

export default ContributorSection;