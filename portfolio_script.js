// ===========================
// Chart Configuration
// ===========================
// Ensure Chart.js is loaded before this script

// Revenue Trend Chart (Line Chart)
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue ($K)',
            data: [385, 412, 398, 445, 468, 523],
            borderColor: '#60a5fa',
            backgroundColor: 'rgba(96, 165, 250, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#60a5fa',
            pointBorderColor: '#111827',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15,
                    color: '#1f2937'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 600,
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: '#e5e7eb',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

// Product Category Distribution (Doughnut Chart)
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Electronics', 'Software', 'Services', 'Hardware', 'Consulting'],
        datasets: [{
            data: [28, 22, 18, 17, 15],
            backgroundColor: [
                '#60a5fa',
                '#34d399',
                '#fbbf24',
                '#c084fc',
                '#f87171'
            ],
            borderColor: '#1f2937',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 11,
                        weight: '600'
                    },
                    padding: 15,
                    color: '#1f2937'
                }
            }
        }
    }
});

// Customer Segment Performance (Bar Chart)
const segmentCtx = document.getElementById('segmentChart').getContext('2d');
const segmentChart = new Chart(segmentCtx, {
    type: 'bar',
    data: {
        labels: ['VIP Champions', 'Growth Potential', 'At-Risk', 'New Customers', 'Dormant'],
        datasets: [{
            label: 'Revenue Contribution (%)',
            data: [35, 28, 15, 15, 7],
            backgroundColor: [
                '#34d399',
                '#60a5fa',
                '#f87171',
                '#fbbf24',
                '#6b7280'
            ],
            borderRadius: 5,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15,
                    color: '#1f2937'
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 40,
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: '#e5e7eb',
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

// Regional Sales Breakdown (Horizontal Bar Chart)
const regionalCtx = document.getElementById('regionalChart').getContext('2d');
const regionalChart = new Chart(regionalCtx, {
    type: 'bar',
    data: {
        labels: ['North', 'South', 'East', 'West', 'Central'],
        datasets: [{
            label: 'Sales ($M)',
            data: [2.8, 2.1, 1.9, 1.5, 1.2],
            backgroundColor: [
                '#1e40af',
                '#3b82f6',
                '#60a5fa',
                '#93c5fd',
                '#bfdbfe'
            ],
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15,
                    color: '#1f2937'
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 3.5,
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: '#e5e7eb',
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

// ===========================
// Smooth Scroll Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#3b82f6';
            link.style.fontWeight = '700';
        } else {
            link.style.color = '#6b7280';
            link.style.fontWeight = '500';
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .soft-skill-card, .cert-card, .chart-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Generate Resume Download Mock
// ===========================
document.querySelector('.resume-button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('');
});
