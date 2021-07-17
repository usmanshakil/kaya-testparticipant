import React, { useState } from 'react';
import Title from '../../common-components/title';
import TextWithImage from '../../common-components/text-with-image';
import TextLg from '../../common-components/readmore/index';
import TextSmall from '../../common-components/text/small';
import SimpleButton from '../../common-components/buttons/simple-button';
import Link from 'next/link';
import SingleTag from '../../common-components/tags/tag-single';
import ImgWithText from '../../unique-components/img-with-text';

const Index = ({ item }) => {
  let clinician = item.clinician;

  const [limit] = useState(5);
  const [isTruncate, setIsTruncate] = useState(true);

  const seatsLeft = () => {
    let max = item.maxParticipants;
    let bookedSeats = item.participants.items.length;
    return parseInt(max) - bookedSeats;
  };

  return (
    <div className="p-6 relative bg-white shadow mb-6 rounded-lg mr-6 w-full md:w-1/2 lg:my-4 lg:px-4 max-w-md">
      <Link as={'/explore-detail/' + item.id} href={'/explore-detail/[id]'}>
        <a>
          <Title
            textColor={'text-theme-blue-color'}
            text={item.name}
            alignment={'text-center'}
            textSize={'text-lg'}
            fontWeight="font-semibold"
            fontclassName="f-p-t"
          />
        </a>
      </Link>
      <div className="py-6">
        {clinician && (
          <TextWithImage
            imgUrl={clinician.featuredImage}
            text={`${clinician.firstName} ${clinician.lastName} / ${clinician.credentials}`}
            textColor={'text-theme-blue-color'}
            width={'w-12'}
            height={'h-12'}
            textSize="text-base"
          />
        )}
      </div>
      <TextLg textColor={'text-black'} text={'Description'} />
      <div className="pt-3" style={{ minHeight: '100px' }}>
        <TextLg textColor={'black'} text={item.description} textLength={140} />
      </div>
      <div style={{ minHeight: '100px' }}>
        <div className="sm:flex flex-wrap sm:mb-0 mb-4 ">
          {item.tags.items.map((single, index) => {
            return (
              index < limit &&
              single.tag && (
                <div className="py-1">
                  <SingleTag key={single.id} text={single.tag.name} />
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="pt-6 " style={{ minHeight: '200px' }}> 
        <ImgWithText item={item} />
      </div>
      <div className=" pb-8 absolute bottom-0 w-full flex flex-col items-center">
        <TextSmall
          text={seatsLeft() + ' Seats Left'}
          textSize={'text-base'}
          textColor={'text-theme-gray-color'}
          fontclassName="f-p-t"
          fontWeight="font-normal"
        />
        <div className="mt-4">
          <Link as={'/explore-detail/' + item.id} href={'/explore-detail/[id]'}>
            <a>
              <SimpleButton
                textColor={'text-white'}
                bgColor={'bg-theme-blue-color'}
                paddingX="px-16"
                paddingY="py-2"
                btnText="Book"
                fontWeight="font-normal"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Index;
