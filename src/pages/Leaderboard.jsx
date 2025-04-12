export default function Leaderboard() {
    return (
      <>
  
        <div className="bg-gray-100 mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-8">Leaderboard</h2>
            <p className="text-lg text-gray-700 mb-8">
            Please check that the leaderboard will be released after the challenge ends.</p>
          </div>
      </div>

      <div className="mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-8">Team Ranking
            </h2>
            <p className="text-lg text-gray-700 mb-8">
            The ranking for the competition is based on quantitative evaluation. The final rank of a team is measured by combining objective evaluation metrics:</p>
            <p className="text-lg text-gray-700 mb-8">
            R(team) = R(team)@SR + R(team)@MAE or R(team) = R(team)@MAPE (smaller is better)
            </p>
          </div>
      </div>

  

      </>
  
    );
  }
  