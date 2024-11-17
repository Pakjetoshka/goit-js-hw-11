import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;
const galleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<li class="image-card">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
        </a>
        <div class="image-info">
                <span> Likes ${likes}</span>
                <span> Comments ${comments}</span>
                <span> Views ${views}</span>
                <span> Downloads ${downloads}</span>
</div>
        </li>`;
};
const renderGallery = (gallery, images) => {
  gallery.innerHTML = images.map(image => galleryItem(image)).join('');

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
    }
};

export { renderGallery };