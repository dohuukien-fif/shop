import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import './styles.scss';
import CircularProgress from '@mui/material/CircularProgress';
DialogSearch.propTypes = {};

function DialogSearch(props) {
  const {
    openSearch,
    handleSubmit,
    SearchItem,
    setSearchItem,
    setopenSearch,
    ref,
    loadingSearchs,
  } = props;
  // const {} = props;
  return (
    <div className={openSearch ? 'header_Search2 activeSearch' : 'header_Search2'}>
      <div className={openSearch ? 'Search2_container activeSearchModal' : 'Search2_container'}>
        <div className="Search2_block">
          <div className="Search2_title">
            <span>TÌM KIẾM</span>

            <AiOutlineClose
              onClick={() => setopenSearch(false)}
              style={{ fontSize: '30px', cursor: 'pointer' }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              // className={scrow && 'activeHeader'}
              value={SearchItem}
              type="text"
              placeholder="Tìm kiến sản phẩm..."
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button>
              {loadingSearchs === true ? (
                <CircularProgress
                  // sx={{ fontSize: '10px' }}
                  style={{ width: '18px', height: '18px', marginRight: '10px' }}
                  color="inherit"
                />
              ) : (
                <FiSearch />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DialogSearch;
