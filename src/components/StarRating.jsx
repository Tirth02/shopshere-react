import React from 'react'

const StarRating = ({rating}) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1: 0);
    
  return (
    <div className="flex items-center gap-1">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-500 text-lg">★</span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className="text-yellow-500 text-lg">☆</span>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-lg">★</span>
      ))}
    </div>
  )
}

export default StarRating