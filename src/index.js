/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   count=0;
   for( i=0; i<preferences.length-2; i++) { 
      if(preferences[i]==0) continue;
      k=i;
      for(j=0; j<=2; j++) {
         if(preferences[k]==0 ||preferences[k]-1==k) { k=-1; break;}
         k=preferences[k]-1;
      }
      if(k==i) {
         count++; 
         for(j=0; j<=2; j++) {
         m=k;
         k=preferences[k]-1;
         preferences[m]=0;
         }
      }
   }
   
   return count;
};
