import React from 'react';
import { SearchRounded } from '@mui/icons-material';
import { toast } from 'react-toastify';

type Props = {
    onSubmit: (search: string) => void;
};

const Search: React.FC<Props> = ({ onSubmit }) => {
    const [search, setSearch] = React.useState('');

    const handleSubmit = React.useCallback(() => {
        if (search === '') {
            toast.error('Please enter a city name!');
        }
        onSubmit(search);
    }, [onSubmit, search]);

    return (
        <div
            className={
                'flex flex-row rounded-full bg-gray-50 shadow-2xl px-8 py-3 w-[90vw] md:w-[60vw] lg:w-[40vw] items-center justify-between'
            }
        >
            <input
                onKeyDown={(e) => e.key == 'Enter' && handleSubmit()}
                className={'rounded-full outline-none bg-transparent flex-grow text-gray-600 font-medium text-lg'}
                type={'text'}
                placeholder={'London'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSubmit} className={'text-gray-500'}>
                <SearchRounded />
            </button>
        </div>
    );
};

export default Search;
