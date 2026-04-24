function countBatteriesByHealth(presentCapacities) {
  const ratedCapacity = 120;

  const counts = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };

  presentCapacities.forEach(capacity => {
    const soh = (capacity / ratedCapacity) * 100;

    if (soh > 83) {
      counts.healthy++;
    } else if (soh >= 63) {
      counts.exchange++;
    } else {
      counts.failed++;
    }
  });

  return counts;
}

const result = countBatteriesByHealth([113, 116, 80, 95, 92, 70]);
console.log(result);