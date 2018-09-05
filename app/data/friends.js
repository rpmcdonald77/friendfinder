var friends = [
    {
      name: "Ahmed",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
      scores: [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Jacob Deming",
      photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
      scores: [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
      ]
    },
    {
      name: "Jeremiah Scanlon",
      photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
      scores: [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
      ]
    },
    {
      name: "Louis T. Delia",
      photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
      scores: [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
      ]
    },
    {
      name: "Lou Ritter",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
      scores: [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
      ]
    },
    {
      name: "Jordan Biason",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
      scores: [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
      ]
    }
  
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends;
//   Determine the user's most compatible friend using the following as a guide:
//   Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
//   With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
//     Example: 
//   User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  
//   User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
  
//   Total Difference: 2 + 1 + 2 = 5
//   Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
//   The closest match will be the user with the least amount of difference.
//   Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//   The modal should display both the name and picture of the closest match.  