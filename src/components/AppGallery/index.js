import React from 'react';

import {
  AppGalleryContainer,
  AppGalleryCard,
  AGCardH2,
  AGCardIcon,
  AGCardText,
  AGCardIcon2,
  AppGalleryCardLink,
} from './AppGalleryElements';
const AppGallery = () => {
  return (
    <>
      <AppGalleryContainer>
        <AppGalleryCardLink to="/form-template">
          <AppGalleryCard>
            <AGCardH2>Forms</AGCardH2>
            <AGCardIcon />
            <AGCardText>
              Hello, this is where you will find the form components. Use them
              wisely.
            </AGCardText>
          </AppGalleryCard>
        </AppGalleryCardLink>
        <AppGalleryCardLink>
          <AppGalleryCard to="#">
            <AGCardH2>No App</AGCardH2>
            <AGCardIcon2 />
            <AGCardText>No App Exists Yet</AGCardText>
          </AppGalleryCard>
        </AppGalleryCardLink>
      </AppGalleryContainer>
    </>
  );
};

export default AppGallery;
