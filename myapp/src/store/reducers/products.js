const data = [
    {   
        id :'1',
        name: 'AngryWhopper',
        price: 4,
        image: [{url: '/images/AngryWhopper.png'}]
    },
    {
        id : '2',
        name: 'SingleStackerKing',	
        price: 2,
        image: [{url: '/images/SingleStackerKing.png'}]
    },
    {
        id : '3',
        name: 'DoubleStackerKing',	
        price: 3,
        image: [{url:'/images/DoubleStackerKing.png'}]
    },
    {
        id : '4',
        name: 'TripleStackerKing',	
        price: 3.5,
        image: [{url : '/images/TripleStackerKing.png'}]
    },
    {
        id : '5',
        name: 'BigKingXL',	
        price: 4,
        image: [{url : '/images/BigKingXL.png'}]
    },
    {
        id : '6',
        name: 'DoublelQuaterPounderKing',	
        price: 5.2,
        image: [{url: '/images/DoublelQuaterPounderKing.jpg'}]
    },
    {
        id : '7',
        name: 'DoubleCheeseburger',	
        price: 5.2,
        image: [{url: '/images/DoubleCheeseburger.jpg'}]
    },
    {
        id : '8',
        name: 'BaconKingJr',	
        price: 5.2,
        image: [{url: '/images/BaconKingJr.jpg'}]
    },
    {
        id : '9',
        name: 'BaconKing',	
        price: 5.5,
        image: [{url: '/images/BaconKing.jpg'}]
    },
    {
        id : '10',
        name: 'BaconDoubleCheeseburger',	
        price: 3.5,
        image: [{url: '/images/BaconDoubleCheeseburger.png'}]
    },
    {
        id : '11',
        name: 'RodeoKing',	
        price: 5,
        image: [{ url: '/images/RodeoKing.jpg'}]
    },
    {
        id : '12',
        name: 'Whopper',	
        price: 3.5,
        image: [{url:'/images/Whopper.jpg'}]
    },
    {
        id : '13',
        name: 'QuarterPoundKing',	
        price: 2,
        image: [{url:'/images/QuarterPoundKing.jpg'}]
    },
    {
        id : '14',
        name: 'BBQBaconWhopper',	
        price: 4.7,
        image: [{url:'/images/BBQBaconWhopper.jpg'}]
    },
    
    {
        id : '15',
        name: 'DoubleWhopper',	
        price: 4.5,
        image: [{url: '/images/DoubleWhopper.jpg'}]
    },
    {
        id : '16',
        name: 'WhopperJr',	
        price: 3,
        image: [{url: '/images/WhopperJr.jpg'}]
    },
    {
        id : '17',
        name: 'BaconCheeseWhopper',	
        price: 3,
        image: [{url: '/images/BaconCheeseWhopper.jpg'}]
    },
    
    {
        id : '18',
        name: 'Cheeseburger',	
        price: 2,
        image: [{url: '/images/Cheeseburger.jpg'}]
    },
    {
        id :'19',
        name: 'Hamburger',	
        price: 2.5,
        image: [{url: '/images/Hamburger.jpg'}]
    },
    {
        id :'20' ,
        name: 'BaconCheeseburger',
        price: 2.5,
        image: [{url: '/images/BaconCheeseburger.jpg'}]
    },
];

const initialState = data;

const reducer = (state = initialState) => state;

export default reducer;